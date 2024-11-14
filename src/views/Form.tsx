import { useParams } from "react-router-dom";

const Form: React.FC = () => {
    const params = useParams();

    const getParamType = () => {
        switch(params.type){
            case '1':
            return 'Sono';
            case '2':
            return 'Amamentação';
            case '3':
            return 'Fralda';
            default:
            return 'Sono';
        }
    }

    return getParamType();
};

export default Form;