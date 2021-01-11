import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
// import Heading from "../../atoms/Heading/Heading";
import './Form.css';
import Center from "../../Center/Center";
import { Default } from "../../atoms/Heading/Heading.stories";
import { Primary } from "../../atoms/Button/Button.stories"

export default function Form(props) {
    const { size='small', children} = props;
    return (
        <form className="form">
            <Default></Default>
            <Label size={size}>{children}</Label>
            <Input size={size} placeholder={children} />
            <Label size={size}>{children}</Label>
            <Input size={size} placeholder={children} />
            <Label size={size}>{children}</Label>
            <Input size={size} placeholder={children} />
            <Center><Primary /></Center> 
        </form>
    )
}