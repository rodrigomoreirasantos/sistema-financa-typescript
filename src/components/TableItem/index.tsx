import * as Component from './styles'
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return(
        <Component.TableLine>
           <Component.TableColumn>{formatDate(item.date)}</Component.TableColumn>
           <Component.TableColumn>
               <Component.Category color={categories[item.category].color} >
                    {categories[item.category].title}
               </Component.Category>
               </Component.TableColumn>
           <Component.TableColumn>{item.title}</Component.TableColumn>
           <Component.TableColumn>
               <Component.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
               </Component.Value>
            </Component.TableColumn>
        </Component.TableLine>
    );
}