/**
 * @file 大图的组件
 * @author yuanxin
 */
import Component from './component';

export default class LargePic extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {data} = this.props;

		return `<div class="item multiple-image" on:click="aa">
                <h3>
                    ${data.title}
                </h3>
                <div class="image-list">
                  <img src="${data.imageList[0]}" class="large-img"/>
                </div>
            </div>`;
	}

}