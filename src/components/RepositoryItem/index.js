// Write your code here

const RepositoryItem = props => {
  const {repositoryProps} = props
  const camelCaseRepoProps = {
    avatarUrl: repositoryProps.avatar_url,
    forksCount: repositoryProps.forks_count,
    id: repositoryProps.id,
    issuesCount: repositoryProps.issues_count,
    name: repositoryProps.name,
    starsCount: repositoryProps.stars_count,
  }
  const {
    avatarUrl,
    forksCount,
    id,
    issuesCount,
    name,
    starsCount,
  } = camelCaseRepoProps
  //   console.log(camelCaseRepoProps)

  return (
    <li className="repositoryListItem">
      <img className="repositoryItemImage" alt={name} src={avatarUrl} />
      <h1>{name}</h1>
      <div>
        <div className="starscontainer">
          <img
            alt="stars"
            className="starsImage"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          />
          <p>{starsCount}</p>
        </div>
        <div className="starscontainer">
          <img
            className="starsImage"
            alt="forks"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          />
          <p>{forksCount}</p>
        </div>
        <div className="starscontainer">
          <img
            className="starsImage"
            alt="open issues"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          />
          <p>{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
