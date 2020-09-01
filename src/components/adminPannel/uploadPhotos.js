import React from 'react';
import { apiService } from '../../services'
import MaterialTable from 'material-table'
import { toast } from 'react-toastify';
import Dashoard from './dashboard'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const tableColumns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Category', field: 'category' },

    {
        title: 'Title',
        field: 'title',
    },
    { title: 'File', field: 'file' }
];

export default class uploadPhotos extends React.Component {
    state = {
        rows: [],
        columns: tableColumns
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
    render() {
        return (
            <Dashoard {...this.props}>
                <Grid item xs={12}>
                    <Paper className="paper_style">
                        <MaterialTable
                            title="Uploaded photos"
                            padding="dense"
                            columns={this.state.columns}
                            data={this.state.rows}
                            actions={[
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

            </Dashoard>
        );
    }
}