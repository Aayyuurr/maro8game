import type { PageServerLoad } from './$types';
import { redirect, fail,error  } from '@sveltejs/kit';
import type { Actions } from './$types';
export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    create: async ({ cookies, request }) => {
        const fromData = await request.formData()
        // register in cookie and local storage
        for (const [key, value] of fromData.entries()) {
            cookies.set(key, value)
        }
        cookies.set('isNames', 'false')
        cookies.set('isStarted', 'false')

        throw redirect(307, '/create/nameplayer' )


    },
}