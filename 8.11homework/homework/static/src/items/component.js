/**
 * @file 所有模板文件的基类
 * @author yaoyanhui
 */

export default class Component {
	constructor(props) {
		this.props = props;
	}

	render() {
		return '基类'
	}

	constructElement() {
		const html = this.render();
		const $content = document.createElement('div');
		$content.innerHTML = html;
		this.el = $content;
		return this.el;
	}
}