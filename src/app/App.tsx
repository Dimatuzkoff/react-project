// react
import { useState } from 'react';
// components
import { Select } from '@/widgets/select/ui/Select/Select';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Avatar } from '@/shared/ui/Avatar';
import { AvatarWithInfo } from '@/shared/ui/AvatarWithInfo';
import { Tabs } from '@/widgets/tabs';
// assets
import SearchIcon from '@/shared/assets/svg/icons/search.svg?react';
// styles
import styles from './App.module.scss';
// data
import { optionsData } from '@/widgets/select/model/optionsData';
import { VerificationCodeInput } from '@/shared/ui/VerificationCodeInput';

export const App = () => {
    const [selected1, setSelected1] = useState<typeof optionsData>([]);
    const [selected2, setSelected2] = useState<typeof optionsData>([]);
    const [selected3, setSelected3] = useState<typeof optionsData>([]);
    const [selected4, setSelected4] = useState<typeof optionsData>([]);
    const [selected5, setSelected5] = useState<typeof optionsData>([]);

    const handleComplete = (code: string) => {
        console.log('Entered code:', code);
    };

    return (
        <div className={styles.App}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    marginTop: '40px',
                }}
            >
                <h2>Input</h2>
                <Input
                    type="password"
                    label="disabled input"
                    iconBefore={<SearchIcon />}
                    iconAfter={<SearchIcon />}
                    helperText="This is a hint text to help user."
                    placeholder="Input..."
                    tooltipText="This is a tooltip text"
                    disabled
                />
                <Input
                    type="password"
                    label="Email"
                    iconBefore={<SearchIcon />}
                    iconAfter={<SearchIcon />}
                    placeholder="very long input placeholder text here to test the text overflow behavior of the input component"
                    tooltipText="This is a tooltip text"
                    isQuiet
                    helperText="This is a hint text to help user."
                    isShowBadge
                />
                <Input
                    type="text"
                    label="Label"
                    iconBefore={<SearchIcon />}
                    isQuiet
                    placeholder="Input..."
                    uiType="outline"
                    helperText="This is a hint text to help user."
                />
                <Input
                    type="text"
                    label="Label"
                    placeholder="Input..."
                    labelPosition="right"
                    isShowBadge={false}
                    isError
                    isRequired
                    helperText="This is a hint text to help user."
                />
                <Input
                    type="text"
                    label="Label"
                    placeholder="Input..."
                    labelPosition="right"
                    isShowBadge={false}
                    isQuiet
                    helperText="This is a hint text to help user."
                />
                <Input
                    type="text"
                    label="Label"
                    placeholder="Input..."
                    labelPosition="right"
                    uiType="outline"
                    helperText="This is a hint text to help user."
                    tooltipText="This is a tooltip text"
                />
                <Input
                    type="text"
                    label="Label"
                    placeholder="Input..."
                    labelPosition="right"
                    uiType="outline"
                    helperText="This is a hint text to help user."
                    tooltipText="This is a tooltip text"
                    isQuiet
                    isRequired
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    marginTop: '40px',
                }}
            >
                <h2>Select</h2>
                <Select
                    label="Choose a color"
                    isClearable
                    size="36"
                    placeholder="Select..."
                    optionsData={optionsData}
                    isSearchable
                    selected={selected1}
                    // @ts-expect-error
                    setSelected={setSelected1}
                    helperText="This is a hint text to help user."
                    tooltipText="This is a tooltip"
                    isShowTooltip
                    isShowIcons
                />
                <Select
                    label="Multiple colors"
                    isClearable
                    isSearchable
                    isMultiSelect
                    size="40"
                    isQuiet
                    placeholder="Pick some..."
                    optionsData={optionsData}
                    selected={selected2}
                    // @ts-expect-error
                    setSelected={setSelected2}
                    helperText="Helper text"
                    isShowIcons
                />
                <Select
                    label="With error"
                    isClearable
                    isSearchable
                    isError
                    helperText="Something went wrong"
                    uiType="outline"
                    size="48"
                    placeholder="Placeholder..."
                    optionsData={optionsData}
                    selected={selected3}
                    // @ts-expect-error
                    setSelected={setSelected3}
                />
                <Select
                    label="not searchable"
                    isClearable
                    size="36"
                    placeholder="Select..."
                    optionsData={optionsData}
                    selected={selected4}
                    // @ts-expect-error
                    setSelected={setSelected4}
                    helperText="This is a hint text to help user."
                    tooltipText="This is a tooltip"
                    isShowTooltip
                    uiType="outline"
                />
                <Select
                    label="disabled"
                    isClearable
                    size="36"
                    placeholder="Select..."
                    optionsData={optionsData}
                    selected={selected5}
                    // @ts-expect-error
                    setSelected={setSelected5}
                    helperText="This is a hint text to help user."
                    tooltipText="This is a tooltip"
                    isShowTooltip
                    isQuiet
                    disabled
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    marginTop: '40px',
                }}
            >
                <h2>Button</h2>
                <Button uiType="outline" uiColor="secondary" leftIcon rightIcon>
                    Button textеееееееее
                </Button>
                <Button uiType="fill" uiColor="danger" leftIcon rightIcon>
                    Button textеееееееее
                </Button>
                <Button uiType="fill" uiColor="success" leftIcon>
                    Button textеееееееее
                </Button>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2>Avatar</h2>
                <div
                    style={{ display: 'flex', gap: '40px', marginTop: '40px' }}
                >
                    <Avatar
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN68kEfXRgeGWTS8I5S01p9GD5ljIDek91Q&s"
                        firstName="Nicola"
                        lastName="Harris"
                        size="24"
                        isOnlineIndicator
                    />
                    <Avatar
                        firstName="Nicola"
                        lastName="Harris"
                        size="32"
                        isOnlineIndicator={false}
                    />
                    <Avatar
                        firstName="Nicola"
                        lastName="Harris"
                        size="40"
                        isOnlineIndicator={false}
                    />
                </div>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2>AvatarWithInfo</h2>
                <AvatarWithInfo
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN68kEfXRgeGWTS8I5S01p9GD5ljIDek91Q&s"
                    firstName="Nicola"
                    lastName="Harris"
                    userCardSize="32"
                    isClickable
                    email="nicolaharris@rubikui.com"
                    isOnlineIndicator={false}
                />
                <AvatarWithInfo
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN68kEfXRgeGWTS8I5S01p9GD5ljIDek91Q&s"
                    firstName="Nicola"
                    lastName="Harris"
                    userCardSize="40"
                    uiType="fill"
                    email="nicolaharris@rubikui.com"
                />
                <AvatarWithInfo
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN68kEfXRgeGWTS8I5S01p9GD5ljIDek91Q&s"
                    firstName="Nicola"
                    lastName="Harris"
                    userCardSize="48"
                    isClickable
                    uiType="fill"
                    email="nicolaharris@rubikui.com"
                />
                <AvatarWithInfo
                    firstName="Nicola"
                    lastName="Harris"
                    userCardSize="56"
                    isClickable
                    isOnlineIndicator={false}
                    uiType="fill"
                    email="nicolaharris@rubikui.com"
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: '20px',
                    marginTop: '40px',
                }}
            >
                <h2>VerificationCodeInput</h2>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '20px',
                    }}
                >
                    <VerificationCodeInput
                        title="Secure code"
                        helperText="This is a hint text to help user."
                        length={4}
                        size="small"
                        onComplete={handleComplete}
                    />
                    <VerificationCodeInput
                        title="Secure code"
                        helperText="This is a hint text to help user."
                        length={4}
                        size="medium"
                        onComplete={handleComplete}
                    />
                    <VerificationCodeInput
                        title="Secure code"
                        helperText="This is a hint text to help user."
                        length={4}
                        size="large"
                        onComplete={handleComplete}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: '20px',
                    }}
                >
                    <VerificationCodeInput
                        title="Secure code"
                        helperText="This is a hint text to help user."
                        length={6}
                        size="small"
                        onComplete={handleComplete}
                    />
                    <VerificationCodeInput
                        title="Secure code"
                        helperText="This is a hint text to help user."
                        length={6}
                        size="medium"
                        onComplete={handleComplete}
                    />
                    <VerificationCodeInput
                        title="Secure code"
                        helperText="This is a hint text to help user."
                        length={6}
                        size="large"
                        onComplete={handleComplete}
                        disabled
                    />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    marginTop: '40px',
                }}
            >
                <h2 style={{ marginBottom: '50px' }}>Scrollable Tabs</h2>
                <div className="tabWrapper" style={{ maxWidth: '700px' }}>
                    <Tabs size="32" variant="underlineFilled" />
                </div>
                <h2 style={{ marginBottom: '50px' }}>Dropdown Tabs</h2>
                <div className="tabWrapper" style={{ maxWidth: '700px' }}>
                    <Tabs size="40" behavior="dropdown" />
                </div>
                <h2 style={{ marginBottom: '50px' }}>Arrows Tabs</h2>
                <div className="tabWrapper" style={{ maxWidth: '700px' }}>
                    <Tabs size="40" behavior="arrows" />
                </div>
            </div>
        </div>
    );
};
