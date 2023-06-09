import Link from 'next/link'
import { usePets } from '@/hooks/usePets'

import { Loader } from '@/common/Loader'
import Pagination from '@/components/Pagination'

import { instanceOf } from '@/utils/intanceOf'
import { formatPrice } from '@/utils/formatPrice'

import petPageStyles from '@/styles/pages/PetPage.module.css'
import categoryPageStyles from '@/styles/pages/CategoryPage.module.css'

import { LIMIT } from '@/consts'

import type { ResultPagination } from '@/typings/interfaces'

interface LayoutGridResultsProps {
	errorSearch?: { message: string; state: boolean }
	url: string
}

export function LayoutGridResults({ errorSearch, url }: LayoutGridResultsProps) {
	const { data, isLoading } = usePets(url)

	return (
		<article className="content content_whiteLetter">
			{isLoading && (
				<div className={petPageStyles.loading}>
					<Loader styles={petPageStyles.loading__loader} />
					<p className={petPageStyles.loading__errorText}>
						Wait a minute, our &ldquo;skilled&rdquo; goblin workers are gathering the information.
					</p>
				</div>
			)}
			{!isLoading && (data.error || errorSearch?.state) && data.data && (
				<p className="error">
					{(instanceOf<Record<'message', string>>(data.data, 'message') && data.data.message) ||
						errorSearch?.message}
				</p>
			)}
			{!isLoading &&
				!data.error &&
				data.data &&
				instanceOf<ResultPagination>(data.data, 'offset') && (
					<>
						<Pagination
							links={data.data.links}
							lastPageNumber={data.data.lastPageNumber}
							offset={data.data.offset}
							limit={LIMIT}
						/>
						<div className={categoryPageStyles.pets}>
							{data.data.results.map(({ name, media, price }) => {
								return (
									<Link
										key={name}
										href={`/pets/${name}`}
										className={`${categoryPageStyles.pets__pet} ${categoryPageStyles.pet}`}
									>
										<h2 className={categoryPageStyles.pet__name}>{name}</h2>
										<img
											src={media}
											alt={name}
											width="280"
											height="220"
											className={categoryPageStyles.pet__img}
										/>
										<p className={categoryPageStyles.pet__price}>{`${formatPrice(price)} g`}</p>
									</Link>
								)
							})}
						</div>
					</>
				)}
		</article>
	)
}
