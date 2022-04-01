/*eslint-disable*/
import useShallowEqualSelector from '../../../../shared/hooks/useShallowEqualSelector'

const useFoobarState = (key) => useShallowEqualSelector((state) => state.foobar[key])


export default useFoobarState
