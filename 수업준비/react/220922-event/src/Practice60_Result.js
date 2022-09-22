function Practice60_Result(props) {
    return (
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>번호</th><th>제목</th><th>작성자</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((result, index) => {
                    return (
                        <tr key={"tr_" + index}>
                            <td>{index+1}</td>
                            <td>{result.title}</td>
                            <td>{result.writer}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Practice60_Result;