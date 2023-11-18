import { Image } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Screenshot } from '../../../lib/types'
import './style.scss'

interface IProps {
	screenshots: Screenshot[]
	title: string
}

export const Screenshots = ({ screenshots, title }: IProps) => {
	return (
		<Image.PreviewGroup>
			<Swiper className='gameScreenshots__swiper' slidesPerView='auto' spaceBetween={30}>
				{screenshots.map((screenshot) => (
					<SwiperSlide className='gameScreenshots__slide' key={screenshot.id}>
						<Image src={screenshot.image} alt={title} />
					</SwiperSlide>
				))}
			</Swiper>
		</Image.PreviewGroup>
	)
}
