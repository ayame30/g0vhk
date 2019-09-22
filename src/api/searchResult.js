import { delayResponse } from './';
import response from './test.json';

const members = response
  .reduce((acc, r) => acc.concat(r.members), [])
  .filter((m, i, arr) => i !== arr.findIndex(obj => obj.id === m.id));

export default function (keyword = '') {
  const parsedKeyword = keyword.toUpperCase();
  return delayResponse(
    members
      .filter(m => (
        m.name_ch.toUpperCase().includes(parsedKeyword) ||
        m.name_en.toUpperCase().includes(parsedKeyword) ||
        (m.party && m.party.name_ch.toUpperCase().includes(parsedKeyword))
      ))
      .map(m => ({
        id: m.id,
        name: m.name_ch,
        avatar: `https://g0vhk.io${m.image}`,
        party: m.party && m.party.name_ch,
        attendanceRate: m.id % 100,
        voteRate: m.id % 100,
        lastAction: ['agree', 'disagree', 'abstention', 'absent'][m.id % 4],
      }))
    )
}
export function findByArea(area = '') {
  return delayResponse(
    members
      .map(m => ({
        id: m.id,
        name: m.name_ch,
        avatar: `https://g0vhk.io${m.image}`,
        party: m.party && m.party.name_ch,
        attendanceRate: m.id % 100,
        voteRate: m.id % 100,
        lastAction: ['agree', 'disagree', 'abstention', 'absent'][m.id % 4],
      }))
    )
} 