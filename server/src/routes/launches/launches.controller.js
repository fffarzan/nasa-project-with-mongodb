const { existsLaunchWithId, getAllLaunches, scheduleNewLaunch, abortLaunchById } = require('../../models/launches.model');

const { getPagination } = require('../../services/query');

function handleErrorAsResponse (response, statusCode, message) {
  return response.status(statusCode).json({ error: message });
}

async function httpGetAllLaunches (req, res) {
  const { skip, limit } = getPagination(req.query);
  const launches = await getAllLaunches(skip, limit);
  return res.status(200).json(launches);
}

async function httpAddNewLaunch (req, res) {
  const launch = req.body;
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return handleErrorAsResponse(res, 400, 'Missing required launch property')
  }
  launch.launchDate = new Date(launch.launchDate); 
  if (isNaN(launch.launchDate)) {
    return handleErrorAsResponse(res, 400, 'Invalid launch date')
  }
  await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
}

async function httpAbortLaunch (req, res) {
  const launchId = +req.params.id;
  const isLaunchExists = await existsLaunchWithId(launchId)
  if (!isLaunchExists) {
    return handleErrorAsResponse(res, 404, 'Launch not found')
  }
  const abortedLaunch = await abortLaunchById(launchId);
  if (!abortedLaunch) {
    return handleErrorAsResponse(res, 400, 'Launch not aborted')
  }
  return res.status(200).json({ ok: true });
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
};