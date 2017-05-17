import React from 'react'

export default class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      poem: ''
    }
  }

  validLine(line, index) {
    let wordCount = line.split(' ').filter(word => word !== '').length
    return index % 2 === 0 ? wordCount === 3 : wordCount === 5
  }

  validPoem(poem) {
    return poem.split('\n').filter((line, index) =>
      this.validLine(line, index + 1)).length === 3
  }

  handleChange(event) {
    this.setState({ poem: event.target.value })
  }

  poemError() {
    if (!this.validPoem(this.state.poem)) {
      return (
        <div id="poem-validation-error" style={ {color: 'red'} }>
          This poem is not written in the right structure!
        </div>
      )
    }
    return ( <p>Not bad</p> )
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={ this.handleChange.bind(this) }/>
        { this.poemError() }
      </div>
    )
  }
}

// First Solution

// import React from 'react'
//
// export default class PoemWriter extends React.Component {
//   constructor() {
//     super()
//     this.state = { content: '', isValid: false }
//     this.setPoemContent = this.setPoemContent.bind(this)
//   }
//
//   render() {
//     return (
//       <div>
//         <textarea rows="3" cols="60" value={ this.state.content } onChange={this.setPoemContent} />
//         { !this.state.isValid ? <div id="poem-validation-error" style={ {color: 'red'} }>This poem is not written in the right structure!</div> : null }
//       </div>
//     )
//   }
// }
//
// // count words
// function countWords(line) {
//   return line.split(' ').filter(l => l).length
// }
//
// // validate poem
// function isValidPoem(poem) {
//   const poemLines = poem.split('\n').filter(l => l)
//   const isRightAmountOfLines = poemLines.length === 3
//   const hasRightAmountofWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5
//   return isRightAmountOfLines && hasRightAmountofWords
// }
//
// // set Poem content
//
// setPoemContent(event) {
//   const content = event.target.value
//
//   if (content) {
//     this.setState({ content: content, isValid: isValidPoem(content) })
//   }
// }
