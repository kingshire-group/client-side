import * as React from 'react';
import { render } from '@testing-library/react';

import { SignInPage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<SignInPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SignInPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
