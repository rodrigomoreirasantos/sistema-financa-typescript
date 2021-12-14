import { TableItem } from '../TableItem'
import * as Component from './styles';
import { Item } from '../../types/Item'

type Props = {
    list: Item[];
}

export const TableArea = ( { list }: Props ) => {
    return(
        <Component.Table>
            <thead>
                <tr>
                    <Component.TableHeadColumn width={100}>Data</Component.TableHeadColumn>
                    <Component.TableHeadColumn width={130}>Categoria</Component.TableHeadColumn>
                    <Component.TableHeadColumn>Título</Component.TableHeadColumn>
                    <Component.TableHeadColumn width={150}>Valor</Component.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>
                    <TableItem key={index} item={item}/>
                )}
            </tbody>
        </Component.Table>
    );
}