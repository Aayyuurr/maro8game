<script lang="ts">
	import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div>

    <form method="POST" action="?/create" use:enhance>
        <!-- select team game or solo game  -->
        <div>
            <label for="gameType">Type de partie</label>
            <select name="gameType" id="gameType">
                <option value="team">Equipe</option>
                <option value="solo">Solo</option>
            </select>
        </div>
        <!-- select number of player can be 2 to 30  -->
        <div>
            <label for="playerNumber">Nombre de joueurs
                <input type="number" name="playerNumber" id="playerNumber" min="2" max="30" required> 
            </label>
        </div>
        <!-- select number of team can be 2 to 10  -->
        <div>
            <label for="teamNumber">combien de personne par équipe
                <input type="number" name="teamNumber" id="teamNumber" min="2" max="10" required>
            </label>

        </div>
        <!-- avec élimination ou pas -->
        <div>
            <label for="elimination">Elimination</label>
            <select name="elimination" id="elimination">
                <option value="true">Oui</option>
                <option value="false">Non</option>
            </select>
        </div>

        
        <button type="submit">Créer</button>

    </form>
</div>