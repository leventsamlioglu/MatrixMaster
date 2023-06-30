const Card = ({user}) => {
    return ( 
        <div className="card flex-row shadow-lg p-3 mb-5 bg-body rounded">
				<img
					className="card-img-top w-50"
					src={user.avatar_url}
					alt="User avatar"
				/>
				<ul className="card-body fs-2">
					<h1 className="card-title mb-5">{user.name}</h1>
					<li className="card-text">User name : {user.login}</li>
					<li className="card-text">Location : {user.location}</li>
					<li className="card-text">Company : {user.company}</li>
					<li className="card-text mb-3">Email : {user.email}</li>
                    <h3 className="mt-2">Short Biography</h3>
					<li className="card-text fs-4 mt-2 text-center">{user.bio}</li>
				</ul>
			</div>
     );
}
 
export default Card;