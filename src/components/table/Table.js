import React, { useEffect, useState } from 'react'

const Table = (data) => {

    let title = data.title;
    let canDelete = data.canDelete;
    let canUpdate = data.canUpdate;
    let canViewMore=data.canViewMore
    let modalUsed = data.modal;

    const handleUpdate = data.handleUpdate;
    const handleDelete = data.handleDelete;
    const handleViewMore =data.handleViewMore
    // const handleViewMore=data.handleViewMore;

    let rowOfUsers;
    let headOfusers;
    data = data.data;

    if (data.length == 0) {

        <div className='background2 text-center display-3 py-3 text-white fw-bold'>No Data Found</div>
        
    }

    if (data.length > 0) {

        let headData = Object.keys(data[0]);
        if (canDelete || canUpdate  || canViewMore)
            headData.push('Actions');



        headOfusers = headData.map(
            (d) => {
                return (
                    <th>
                        {d}
                    </th>
                )
            }
        )


    }
    if (data.length > 0) {
        rowOfUsers = data.map((d, ind) => {

            return (
                <tr key={ind}>
                    {
                        Object.values(d).map((t) => {
                            return (
                                <td>{t}</td>
                            )
                        })



                    }
                    {canUpdate || canDelete ||canViewMore?
                        <td >
                            {

                                canUpdate ?

                                    <button className='btn btn-outline-success me-2'

                                        onClick={() =>
                                            handleUpdate(d)

                                        }

                                    ><i class="bi bi-pencil-square me-1"></i>Edit Detail</button> : null

                            }
                            {
                                canDelete ? <button className='btn btn-outline-danger'
                                    onClick={() => handleDelete(d)}
                                ><i class="bi bi-trash3-fill me-1"></i> Delete </button> : null
                            }
                            {
                                canViewMore ? <button className='btn btn-outline-danger'
                                    onClick={() => handleViewMore(d)}
                                > View More </button> : null
                            }
                        </td>
                        : null}

                </tr>
            )

        });
    }
    return (
        <>

            <table class="table table-bordered mt-2  table-striped">
                <thead className='text-center'>
                    <tr className='colspan'>

                        {headOfusers}

                    </tr>
                </thead>
                <tbody className='text-center'>


                    {
                        rowOfUsers
                    }


                </tbody>
            </table>
        </>
    )
}

export default Table