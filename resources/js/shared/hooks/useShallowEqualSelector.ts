/*eslint-disable*/
import { useSelector, shallowEqual } from 'react-redux'

// eslint-disable-next-line arrow-body-style
const useShallowEqualSelector = (selector) => {
    return useSelector(selector, shallowEqual)
}

export default useShallowEqualSelector
