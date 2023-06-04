<script lang="ts">
	import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const isTeam = data.isTeam;
    let team = "aleatoire";
    let player="";
    let playersArray:string[] =[]
    let showAddPlayer = true;
    function addToPlayers(){




        if (playersArray.includes(player)){
            alert("ce nom est déjà utilisé");
            player="";
            return;}
        playersArray.push(player);
        player="";
        let length = playersArray.length;
        if (length.toString() == data.playerNumber){
            showAddPlayer = false;
            return;
        }
    };
    
   let refresh = false;
</script>

<div class="wrapper">
    {#if data.isTeam=="team"}
        <div>
            <fieldset>
                <legend>team composition</legend>
                <label for="aleatoire">
                <input type="radio" id="aleatoire" name="team" bind:group={team} value="aleatoire" checked>
                équipe aléatoire
                </label>
                <label for="choix">
                <input type="radio" id="choix" name="team" bind:group={team} value="choix">
                choix des équipes
                </label>
            </fieldset>
        </div>
    {/if}
    <h4>liste des joueurs</h4>
        {#key player }
            {#key refresh}
                <ul>
                    {#each playersArray as play, index}
                        <li><span>{play} </span>
                            <button on:click={
                                () => {
                                    playersArray.splice(index, 1);
                                    refresh = !refresh;
                                    if (length.toString() != data.playerNumber){
                                        showAddPlayer = true;
                                    }
                                }
                            }>Effacer</button>
                        </li>
                    {/each}
                </ul>
                {/key}
        {/key}
        {#key refresh}
    {#if showAddPlayer==true}
        {#if team=="aleatoire"}
                <label>
                    ajouter nom joueur:
                    <input
                        name="player"
                        type="text"
                        autocomplete="on"
                        bind:value={player}
                        required
                        on:keydown={(e) => {
                            if (e.key === 'Enter') {
                                addToPlayers();
                            }
                        }}
                    />
                </label>
                <button on:click={addToPlayers}>ajouter joueur</button>
        {/if}
    {/if}
    {/key}
</div>


<style>
  fieldset {
    border: 1px solid #ddd;
    padding: 10px;
    
    display: flex;
    justify-content: space-between;
  }
  li{
      display: flex;
      justify-content: space-between;
      max-width: 9rem;
      gap: 1rem;
      align-items: center;
    margin: 0;
    height: 3.5rem;
  }
 
</style>
