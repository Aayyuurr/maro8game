import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';



export const load = (async ({ cookies }) => {
	const isTeam = cookies.get('gameType');
    const players = cookies.get('players');
    const playerNumber = cookies.get('playerNumber');
    const teamNumber = cookies.get('teamNumber');

    return{isTeam , players, playerNumber, teamNumber}

	
}) satisfies PageServerLoad;

// export const actions: Actions={
//     addPLayer: async ({ cookies,request }) => {
//         const dataForm = await request.formData()  
//         let player= dataForm.get('player');     
//         console.log(dataForm.get('player'));
//         let players = cookies.get('players');
//         if(players){
//             //append player to players array
//             players = players + ',' + player;
//         }else{
//             players = player;
//         }
//         cookies.set('players',players);
// }}