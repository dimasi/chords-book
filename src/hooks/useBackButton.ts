import { useLocation, useNavigate } from 'react-router-dom';

export const useBackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    const doesAnyHistoryEntryExist = location.key !== 'default';

    if (doesAnyHistoryEntryExist) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return { handleBackButtonClick };
};
