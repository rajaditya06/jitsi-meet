import React, { Component } from 'react';
import { WithTranslation } from 'react-i18next';

import { translate } from '../../../i18n/functions';
import Button from '../../../ui/components/web/Button';

/**
 * The type of the React {@code Component} props of {@link InlineDialogFailure}.
 */
interface IProps extends WithTranslation {

    /**
     * Allows to retry the call that previously didn't succeed.
     */
    onRetry: Function;

    /**
     * Indicates whether the support link should be shown in case of an error.
     */
    showSupportLink: Boolean;
}

/**
 * Inline dialog that represents a failure and allows a retry.
 */
class InlineDialogFailure extends Component<IProps> {
    /**
     * Renders the content of this component.
     *
     * @returns {ReactElement}
     */
    render() {
        const { t, showSupportLink } = this.props;

        const supportLink = interfaceConfig.SUPPORT_URL;
        const supportString = t('inlineDialogFailure.supportMsg');
        const supportLinkElem
            = supportLink && showSupportLink
                ? (
                    <div className = 'inline-dialog-error-text'>
                        <span>{ supportString.padEnd(supportString.length + 1) }
                        </span>
                        <span>
                            <a
                                href = { supportLink }
                                rel = 'noopener noreferrer'
                                target = '_blank'>
                                { t('inlineDialogFailure.support') }
                            </a>
                        </span>
                        <span>.</span>
                    </div>
                )
                : null;

        return (
            <div className = 'inline-dialog-error'>
                <div className = 'inline-dialog-error-text'>
                    { t('inlineDialogFailure.msg') }
                </div>
                { supportLinkElem }
                <Button
                    className = 'inline-dialog-error-button'
                    label = { t('inlineDialogFailure.retry') }
                    onClick = { this.props.onRetry } />
            </div>
        );
    }
}

export default translate(InlineDialogFailure);
