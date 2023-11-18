import { Min_System_Requirements } from '../../../lib/types'
import { InfoGroup } from '../InfoGroup'
import './style.scss'

interface IProps {
	className?: string
	minSystemRequirements: Min_System_Requirements
}

export const SystemRequirements = ({ className = '', minSystemRequirements }: IProps) => {
	return (
		<ul className={'gameSystemRequirements ' + className}>
			<li>
				<InfoGroup term='ОС' definition={minSystemRequirements.os} />
			</li>
			<li>
				<InfoGroup term='Память' definition={minSystemRequirements.memory} />
			</li>
			<li>
				<InfoGroup term='Процессор' definition={minSystemRequirements.processor} />
			</li>
			<li>
				<InfoGroup term='Графика' definition={minSystemRequirements.graphics} />
			</li>
			<li>
				<InfoGroup term='Хранилище' definition={minSystemRequirements.storage} />
			</li>
		</ul>
	)
}
