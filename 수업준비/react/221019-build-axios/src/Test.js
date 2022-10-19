
import PolicyHTML from './universe/universe.html';
import {WebView} from 'react';

const Test = () => {
    return (
        <div>
            <WebView html={PolicyHTML} />
        </div>
    )
}
export default Test;