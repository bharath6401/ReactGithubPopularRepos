// Write your code here
import Loader from 'react-loader-spinner'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const LanguageFilterItem = props => {
  const {apiResponse} = props
  //   const PopularCase = apiResponse.popular_repos
  if (apiResponse === undefined) {
    return (
      <div className="loader" testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    )
  }
  const PopularCase = apiResponse.popular_repos
  //   console.log(PopularCase)
  return (
    <div>
      <ul>
        {PopularCase.map(eachItem => (
          <RepositoryItem key={eachItem.id} repositoryProps={eachItem} />
        ))}
      </ul>
    </div>
  )
}
export default LanguageFilterItem
