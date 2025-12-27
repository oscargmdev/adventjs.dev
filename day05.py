# import these modules if you need them:
from datetime import datetime
import math

def time_until_take_off(from_time: str, take_off_time: str) -> int:
  def _parse_elf_time(t: str) -> datetime:
    return datetime(
      int(t[0:4]),
      int(t[5:7]),
      int(t[8:10]),
      int(t[11:13]),
      int(t[14:16]),
      int(t[17:19]))

  from_dt = _parse_elf_time(from_time)
  take_off_dt = _parse_elf_time(take_off_time)
  
  return math.floor(
    (take_off_dt - from_dt).total_seconds()
  )
