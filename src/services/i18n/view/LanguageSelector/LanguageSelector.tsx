import React from 'react';
import { bind } from 'decko';
import { WithTranslation, withTranslation } from 'react-i18next';

import { Lang } from 'shared/types/app';

interface IOption {
  value: Lang;
  label: string;
}

class LanguageSelector extends React.PureComponent<WithTranslation> {
  public static options: IOption[] = [
    { value: 'en-US', label: 'English' },
    { value: 'ru-RU', label: 'Русский' },
  ];

  public render() {
    const { i18n: { language } } = this.props;

    return (
      <div>
        <select value={language} onChange={this.changeLanguage}>
          {LanguageSelector.options.map(({ value, label }, i) => (
            <option value={value} key={i}>{label}</option>
          ))}
        </select>
      </div>
    );
  }

  @bind
  private changeLanguage({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) {
    const { i18n } = this.props;
    i18n.changeLanguage(value);
  }

  // private parseToShortLang(value: string) {
  //   return value.slice(0, value.indexOf('-'));
  // }
}

export { LanguageSelector };
export default withTranslation()(LanguageSelector);
