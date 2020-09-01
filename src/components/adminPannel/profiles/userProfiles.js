import React from 'react';
import { apiService } from '../../../services'
import MaterialTable from 'material-table'
import { toast } from 'react-toastify';
import Dashoard from '../dashboard'
import Grid from '@material-ui/core/Grid';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Paper from '@material-ui/core/Paper';
const tableColumns = [
    { title: 'User name', field: 'name' },
    { title: 'User Email', field: 'email' },

];

export default class UserProfiles extends React.Component {
    state = {
        rows: [],
        columns: tableColumns,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    }
    renderData = async () => {
        const getComments = await apiService.get('comments/getComments');
        if (getComments.data) {
            const data = getComments.data.data
            this.setState({
                rows: data
            })

        }
    }
    componentDidMount = () => {
        this.renderData()

    }
    handleDelete = async (id) => {
        try {
            const deleteComment = await apiService.delete(`comments/${id}`)

            if (deleteComment.data.message === "success") {
                toast.success("Deleted successfully")
                this.renderData()
            }
            else {
                toast.error("Something went wrong!")

            }
        }
        catch (err) {

        }
    }
    handleEdit = (data) => {
        this.setState({
            ...this.state,
            name: data.name,
            email: data.email,

        })
    }
    onChangeListener = (e) => {
        e.preventDefault();
        console.log("value", e.target.value)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            // [`error_${e.target.name}`]: (e.target.value === '') ? `${e.target.name} is required` : ''
        });
    }
    render() {
        const { name, email, password, confirmPassword, role } = this.state
        return (
            <Dashoard {...this.props}>
                <Grid container maxWidth="lg" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper className="paper_style">
                            <MaterialTable
                                title="Profiles"
                                padding="dense"
                                columns={this.state.columns}
                                data={this.state.rows}
                                actions={[
                                    rowData => ({
                                        icon: 'edit',
                                        tooltip: 'edit User',
                                        onClick: () => this.handleEdit(rowData)
                                    }),
                                    rowData => ({
                                        icon: 'delete',
                                        tooltip: 'Delete',
                                        onClick: () => this.handleDelete(rowData.id)
                                        // disabled: rowData.birthYear < 2000
                                    })
                                ]}
                                options={{
                                    actionsColumnIndex: -1
                                }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className="form_paper">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} md={12} sm={12}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className="inp_style" value={name} name="name" type="text" onChange={e => this.onChangeListener(e)} placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} sm={12}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control className="inp_style" value={email} name="email" type="email" onChange={e => this.onChangeListener(e)} placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} sm={12}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control className="inp_style" value={password} name="password" type="password" onChange={e => this.onChangeListener(e)} placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} sm={12}>
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control className="inp_style" value={confirmPassword} name="confirmPassword" type="password" onChange={e => this.onChangeListener(e)} placeholder="Confirm password" />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} sm={12}>
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control className="inp_style" value={role} name="role" type="text" onChange={e => this.onChangeListener(e)} placeholder="Role" />
                                    </Form.Group>

                                </Form.Row>
                                <div align="center" className="form-group btn_top">
                                    <Button className="btn_load btn_login">Sign up
</Button>

                                </div>
                            </Form>
                        </Paper>
                    </Grid>
                </Grid>

            </Dashoard>
        );
    }
}