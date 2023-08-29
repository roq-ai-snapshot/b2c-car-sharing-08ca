import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  fleet_manager_id: yup.string().nullable().required(),
});
