/**
 * @file 多图的组件
 * @author yaoyanhui
 */
import Component from './component'

export default class MultiplePic extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const {data} = this.props;

		const imageList = data.imageList.map(imageUrl => {
			return `<img src=${imageUrl} />`;
		}).join('');
		return `<div class="item multiple-image" on:click="aa">
                <h3>
                    ${data.title}
                </h3>
                <div class="image-list">
                    ${imageList}
                </div>
            </div>`;
	};

}