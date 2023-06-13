import Base from './base';

interface IWithOptions extends Base {
    options: {
        value: string;
        type: number;
        name: string;
    }[]
}

export default IWithOptions;