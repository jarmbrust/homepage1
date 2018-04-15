<template>
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col">Ability</th>
          <th scope="col">Total</th>
          <th scope="col">Bonus</th>
          <th scope="col">Racial</th>
          <th scope="col">Point Cost</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stat, index) in baseStats" :key="stat.id" >
          <td>{{ stat.id }}</td>
          <td>{{ stat.val }}</td>
          <td>{{ Math.floor(((Number(stat.val)) - 10)/2) }}</td>
          <td>{{ 0 }}</td>
          <td>{{ cost[stat.val] }}</td>
          <td>
            <b-dropdown
              id="ddown1"
              text="Assign Points"
              class="m-md-1"
            >
              <b-dropdown-item
                v-for="(num, i) in cost"
                :key="num"
                @click="modifyStat(stat.val, num, index)"
              >
                Value: {{ i }}, Cost: {{ num }}
              </b-dropdown-item>
            </b-dropdown>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">Points to spend: {{ points }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseStats: [
        { id: 'Strength', val: 8 },
        { id: 'Dexterity', val: 8 },
        { id: 'Constitution', val: 8 },
        { id: 'Intelligence', val: 8 },
        { id: 'Wisdom', val: 8 },
        { id: 'Charisma', val: 8 }
      ],
      points: 27,
      cost: {
        8: 0,
        9: 1,
        10: 2,
        11: 3,
        12: 4,
        13: 5,
        14: 7,
        15: 9
      }
    }
  },
  methods: {
    modifyStat (val, num, index) {
      const value = Object.keys(this.cost).find(key => this.cost[key] === num)
      this.baseStats[index].val = value
      this.adjustPoints(this.cost[val], num)
    },
    adjustPoints (prevCost, newCost) {
      this.points += prevCost - newCost
    }
  }
}
</script>

<style scoped>
  table th {
    padding: 10px;
  }
</style>
