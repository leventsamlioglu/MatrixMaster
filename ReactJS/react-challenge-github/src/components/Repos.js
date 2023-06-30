const Repos = ({repos}) => {
    return ( 
        <>
        {repos && (
            <>
                <h2 className="text-light">Repositories</h2>

                <ul className="list-group list-group-vertical-xxl fs-3">
                    {repos.map((repo) => (
                        <li key={repo.id} className="list-group-item">
                            <a href={repo.html_url}>{repo.name}</a> {`(${repo.language})`} ---- {repo.description} 
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
     );
}
 
export default Repos;