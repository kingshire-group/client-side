import { useHistory } from 'react-router-dom';
/**
 * It returns a function that pushes a new route to the browser history
 * @param data - { path: string; search?: string }
 * @returns A function that pushes the user to a new page.
 */
export const usePush = (data: { path: string; search?: string }) => {
  const history = useHistory();
  const handlePush = () =>
    history.push({
      pathname: data.path,
      search: data.search,
    });
  return { handlePush };
};
