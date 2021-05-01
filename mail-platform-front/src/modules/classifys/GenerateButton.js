import * as React from "react";
import {useEffect} from "react";
import {Button, useCreate, useNotify} from "react-admin";
import BuildIcon from '@material-ui/icons/Build';

export const GenerateButton = ({record}) => {
    let parts = record.code.split('-');
    let notify = useNotify();
    const [generate, {loading, error}] = useCreate('static-contents', {endpoint: parts[1], page: parts[2]});
    useEffect(() => {
        if (error) notify(error.message, 'error', false, null, null);
    }, [error])

    if (parts.length !== 3) return null;

    return (
        <Button label='生成' disabled={loading} onClick={e => e.stopPropagation() || generate()}>
            <BuildIcon/>
        </Button>
    )
}

export default GenerateButton;
