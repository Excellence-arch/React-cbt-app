

const Scoreboard = ({allStudents}) => {
  return (
    <>
        <section className="container-fluid">
            <div className="row">
                <div className="col-6 text-center container-fluid">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {/* <td>Position</td> */}
                                <td>Student ID</td>
                                <td>Firstname</td>
                                <td>Lastname</td>
                                <td>Email</td>
                                <td>Score</td>
                            </tr>
                        </thead>
                        <tbody>
                            {allStudents.map((val, i) => (
                                <tr key={i}>
                                    <td>{val.id}</td>
                                    <td>{val.firstname}</td>
                                    <td>{val.lastname}</td>
                                    <td>{val.email}</td>
                                    <td>{val.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default Scoreboard;