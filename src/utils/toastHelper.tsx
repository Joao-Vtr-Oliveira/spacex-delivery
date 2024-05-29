type info = 'added' | 'blankFields' | 'wrongCode' | 'updated' | 'deleted';

type toastType = {
  title: string;
  description: string;
  status: 'warning' | 'success' | 'error';
  duration: number;
  isClosable: boolean;
}

const toastHelper = (info: info): toastType => {
  let finalToast: toastType = {
    title: 'Title',
    description: 'Description',
    status: 'success',
    duration: 5000,
    isClosable: true
  };

  switch (info) {
    case 'added':
      finalToast.title = 'Location added!';
      finalToast.description = 'Tha location is now in the list';
      finalToast.status = 'success';
      break;
    case 'blankFields':
      finalToast.title = 'Fill all fields';
      finalToast.description = 'Please, fill all the fields';
      finalToast.status = 'error';
      break;
    case 'wrongCode':
      finalToast.title = 'Code invalid';
      finalToast.description = 'Please, the code must have 4 characters!';
      finalToast.status = 'error';
      finalToast.duration = 3000;
      break;
    case 'updated':
      finalToast.title = 'Update success';
      finalToast.description = 'The location was updated!';
      finalToast.status = 'success';
      finalToast.duration = 3000;
      break;
    case 'deleted':
      finalToast.title = 'Location deleted!';
      finalToast.description = 'The location was deleted!';
      finalToast.status = 'warning';
      finalToast.duration = 3000;
  }

	return finalToast;
};

export default toastHelper;
