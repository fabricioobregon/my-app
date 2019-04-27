import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const Direction = withRouter(({ history }) => (
    <button
        type='button'
        onClick={() => { history.push('/new-location') }}
    >
        Click Me!
    </button>
))
