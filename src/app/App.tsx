// react
import { useState } from 'react';
// components
import { Select } from '@/widgets/select/ui/Select/Select';
import { Input } from '@/shared/ui/input';
// assets
import SearchIcon from '@/shared/assets/svg/icons/search.svg?react';
// styles
import styles from './App.module.scss';
// data
import { optionsData } from '@/widgets/select/model/optionsData';

export const App = () => {
    const [selected1, setSelected1] = useState<typeof optionsData>([]);
    const [selected2, setSelected2] = useState<typeof optionsData>([]);
    const [selected3, setSelected3] = useState<typeof optionsData>([]);
    const [selected4, setSelected4] = useState<typeof optionsData>([]);
    const [selected5, setSelected5] = useState<typeof optionsData>([]);

    console.log(selected2);
    return (
        <div className={styles.App}>
            <h2 style={{ margin: '50px 0' }}>Input</h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                }}
            >
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
                    isShowBadge={true}
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

            {/* Select */}
            <h2 style={{ margin: '50px 0' }}>Select</h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px',
                }}
            >
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
                    isShowIcons={true}
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
                    isShowIcons={true}
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
                    uiType={'outline'}
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
                    disabled={true}
                />
            </div>
        </div>
    );
};
