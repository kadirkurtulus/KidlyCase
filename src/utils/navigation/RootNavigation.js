
import { StackActions } from '@react-navigation/native';

import { createNavigationContainerRef } from '@react-navigation/native';



// Router Name Ref
// const routeNameRef = React.createRef();
// Navigation rEF
const navigationRef = createNavigationContainerRef();

// Navigate"
const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  };
};

// Replace
const replace = (name, params) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

// Replace
const goBack = () => {
  navigationRef.current?.goBack();
};

// // Reset
// const reset = (name) => {
//     navigationRef.current?.dispatch(CommonActions.reset(name));
// };

export { replace, navigate, goBack, navigationRef };
