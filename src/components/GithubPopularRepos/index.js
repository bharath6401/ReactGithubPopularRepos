import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {languageSelected: 'ALL', isLoading: true}

  componentDidMount() {
    languageFiltersData.forEach(eachItem => {
      if (eachItem.id === 'ALL') {
        const element = document.getElementById('ALL')
        element.className = 'BtnSelected'
      } else {
        const element = document.getElementById(eachItem.id)
        element.className = 'BtnNotSelected'
      }
    })
    this.initialLanguageSelected('ALL')
  }

  initialLanguageSelected = async languageS => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${languageS}`,
    )
    const responseJson = await response.json()
    console.log(responseJson)
    console.log(responseJson.ok)
    await this.setState({apiResponse: responseJson, isLoading: false})
  }

  languageBtnClicked = event => {
    languageFiltersData.forEach(eachItem => {
      if (eachItem.id === event.target.id) {
        const element = document.getElementById(eachItem.id)
        // console.log('selected')
        element.className = 'BtnSelected'
        // console.log(element)
      } else {
        const element = document.getElementById(eachItem.id)
        element.className = 'BtnNotSelected'
      }
    })
    this.initialLanguageSelected(event.target.value)
  }

  render() {
    const {apiResponse, isLoading} = this.state
    return (
      <div className="col-12">
        <h1 className="popularHeading">Popular</h1>
        <ul className="languageFilterList col-9">
          {languageFiltersData.map(eachItem => (
            <li>
              <button
                id={eachItem.id}
                value={eachItem.id}
                onClick={this.languageBtnClicked}
              >
                {eachItem.language}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <LanguageFilterItem apiResponse={apiResponse} />
        </div>
        {isLoading && (
          <div className="loader" testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
