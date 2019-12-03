import React from 'react';

class Nav extends React.Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <form>
          <select>
            <option>
              {/* Iterate options based on followers
              have that change the state and fetch follower info */}
            </option>
            
          </select>
        </form>
      </div>
    )
  }
}

export default Nav;