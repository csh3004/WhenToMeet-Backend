const timetableService = require('../service/timetableService')
const usersService = require('../service/usersService')

module.exports.getList = async (req, res, next) => {
    try{
        const userNum = usersService.getUserNum();
        const myTimetableList = await timetableService.getMyList(userNum);
        return res.send(myTimetableList);
      } catch(error){
        console.error(error);
        return res.status(500).send('서버 오류');
      }
}

module.exports.create = async (req, res, next) => {
    try{
        const userNum = usersService.getUserNum();
        await timetableService.createTimetable(userNum);
        return res.send({ message: '시간표 생성 완료'})
      } catch(error){
        console.error(error);
        return res.status(500).send('서버 오류');
      }
}

module.exports.delete = async (req, res, next) => {
    try{
        const userNum = usersService.getUserNum();
        await timetableService.deleteTimetable(req.body,userNum);
        return res.send({ message: '시간표 삭제 완료'})
      } catch(error){
        console.error(error);
        return res.status(500).send('서버 오류');
      }
}