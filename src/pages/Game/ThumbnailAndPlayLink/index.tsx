import './style.scss'

interface IProps {
	thumbnailSrc: string
	title: string
	linkHref: string
	className?: string
}

export const ThumbnailAndPlayLink = ({ className = '', thumbnailSrc, title, linkHref }: IProps) => {
	return (
		<div className={'gameThumbnailAndPlayLink ' + className}>
			<img className='gameThumbnailAndPlayLink__thumbnail' src={thumbnailSrc} alt={title} />
			<a target='_blank' className='gameThumbnailAndPlayLink__playLink' href={linkHref}>
				Играть
			</a>
		</div>
	)
}
