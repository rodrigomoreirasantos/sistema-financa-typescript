import * as Component from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return(
        <Component.Container>
            <Component.Title>{title}</Component.Title>
            <Component.Info color={color}>R$ {value}</Component.Info>
        </Component.Container>
    )
}