import { Inject } from '@nestjs/common'
import { meiliToken } from 'src/constants'

export function InjectMeiliSearch() {
	return Inject(meiliToken)
}
