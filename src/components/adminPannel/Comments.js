import React from 'react';

import { apiService } from '../../services'

import MaterialTable from 'material-table'

import { toast } from 'react-toastify';
// Generate Order Data

const tableColumns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Message', field: 'message' },
];

export default class Comments extends React.Component {
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
            <React.Fragment>

                <MaterialTable
                    title="Recent comments"
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

            </React.Fragment>
        );
    }
}