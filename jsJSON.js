$(document).ready(function(){
var states='{"states":[{"state_id":1,"state_name":"Andaman and Nicobar Islands"},{"state_id":2,"state_name":"Andhra Pradesh"},{"state_id":3,"state_name":"Arunachal Pradesh"},{"state_id":4,"state_name":"Assam"},{"state_id":5,"state_name":"Bihar"},{"state_id":6,"state_name":"Chandigarh"},{"state_id":7,"state_name":"Chhattisgarh"},{"state_id":8,"state_name":"Dadra and Nagar Haveli"},{"state_id":37,"state_name":"Daman and Diu"},{"state_id":9,"state_name":"Delhi"},{"state_id":10,"state_name":"Goa"},{"state_id":11,"state_name":"Gujarat"},{"state_id":12,"state_name":"Haryana"},{"state_id":13,"state_name":"Himachal Pradesh"},{"state_id":14,"state_name":"Jammu and Kashmir"},{"state_id":15,"state_name":"Jharkhand"},{"state_id":16,"state_name":"Karnataka"},{"state_id":17,"state_name":"Kerala"},{"state_id":18,"state_name":"Ladakh"},{"state_id":19,"state_name":"Lakshadweep"},{"state_id":20,"state_name":"Madhya Pradesh"},{"state_id":21,"state_name":"Maharashtra"},{"state_id":22,"state_name":"Manipur"},{"state_id":23,"state_name":"Meghalaya"},{"state_id":24,"state_name":"Mizoram"},{"state_id":25,"state_name":"Nagaland"},{"state_id":26,"state_name":"Odisha"},{"state_id":27,"state_name":"Puducherry"},{"state_id":28,"state_name":"Punjab"},{"state_id":29,"state_name":"Rajasthan"},{"state_id":30,"state_name":"Sikkim"},{"state_id":31,"state_name":"Tamil Nadu"},{"state_id":32,"state_name":"Telangana"},{"state_id":33,"state_name":"Tripura"},{"state_id":34,"state_name":"Uttar Pradesh"},{"state_id":35,"state_name":"Uttarakhand"},{"state_id":36,"state_name":"West Bengal"}]}';
var districtsUP='{"districts":[{"district_id":622,"district_name":"Agra"},{"district_id":623,"district_name":"Aligarh"},{"district_id":625,"district_name":"Ambedkar Nagar"},{"district_id":626,"district_name":"Amethi"},{"district_id":627,"district_name":"Amroha"},{"district_id":628,"district_name":"Auraiya"},{"district_id":646,"district_name":"Ayodhya"},{"district_id":629,"district_name":"Azamgarh"},{"district_id":630,"district_name":"Badaun"},{"district_id":631,"district_name":"Baghpat"},{"district_id":632,"district_name":"Bahraich"},{"district_id":633,"district_name":"Balarampur"},{"district_id":634,"district_name":"Ballia"},{"district_id":635,"district_name":"Banda"},{"district_id":636,"district_name":"Barabanki"},{"district_id":637,"district_name":"Bareilly"},{"district_id":638,"district_name":"Basti"},{"district_id":687,"district_name":"Bhadohi"},{"district_id":639,"district_name":"Bijnour"},{"district_id":640,"district_name":"Bulandshahr"},{"district_id":641,"district_name":"Chandauli"},{"district_id":642,"district_name":"Chitrakoot"},{"district_id":643,"district_name":"Deoria"},{"district_id":644,"district_name":"Etah"},{"district_id":645,"district_name":"Etawah"},{"district_id":647,"district_name":"Farrukhabad"},{"district_id":648,"district_name":"Fatehpur"},{"district_id":649,"district_name":"Firozabad"},{"district_id":650,"district_name":"Gautam Buddha Nagar"},{"district_id":651,"district_name":"Ghaziabad"},{"district_id":652,"district_name":"Ghazipur"},{"district_id":653,"district_name":"Gonda"},{"district_id":654,"district_name":"Gorakhpur"},{"district_id":655,"district_name":"Hamirpur"},{"district_id":656,"district_name":"Hapur"},{"district_id":657,"district_name":"Hardoi"},{"district_id":658,"district_name":"Hathras"},{"district_id":659,"district_name":"Jalaun"},{"district_id":660,"district_name":"Jaunpur"},{"district_id":661,"district_name":"Jhansi"},{"district_id":662,"district_name":"Kannauj"},{"district_id":663,"district_name":"Kanpur Dehat"},{"district_id":664,"district_name":"Kanpur Nagar"},{"district_id":665,"district_name":"Kasganj"},{"district_id":666,"district_name":"Kaushambi"},{"district_id":667,"district_name":"Kushinagar"},{"district_id":668,"district_name":"Lakhimpur Kheri"},{"district_id":669,"district_name":"Lalitpur"},{"district_id":670,"district_name":"Lucknow"},{"district_id":671,"district_name":"Maharajganj"},{"district_id":672,"district_name":"Mahoba"},{"district_id":673,"district_name":"Mainpuri"},{"district_id":674,"district_name":"Mathura"},{"district_id":675,"district_name":"Mau"},{"district_id":676,"district_name":"Meerut"},{"district_id":677,"district_name":"Mirzapur"},{"district_id":678,"district_name":"Moradabad"},{"district_id":679,"district_name":"Muzaffarnagar"},{"district_id":680,"district_name":"Pilibhit"},{"district_id":682,"district_name":"Pratapgarh"},{"district_id":624,"district_name":"Prayagraj"},{"district_id":681,"district_name":"Raebareli"},{"district_id":683,"district_name":"Rampur"},{"district_id":684,"district_name":"Saharanpur"},{"district_id":685,"district_name":"Sambhal"},{"district_id":686,"district_name":"Sant Kabir Nagar"},{"district_id":688,"district_name":"Shahjahanpur"},{"district_id":689,"district_name":"Shamli"},{"district_id":690,"district_name":"Shravasti"},{"district_id":691,"district_name":"Siddharthnagar"},{"district_id":692,"district_name":"Sitapur"},{"district_id":693,"district_name":"Sonbhadra"},{"district_id":694,"district_name":"Sultanpur"},{"district_id":695,"district_name":"Unnao"},{"district_id":696,"district_name":"Varanasi"}]}'
var sessions='{"sessions":[{"center_id":889372,"name":"Silver Jubliee Mobile Team","address":"Jagat Narayan Road Lucknow Uttar Pradesh","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"LUCKNOW URBAN","pincode":226003,"from":"09:00:00","to":"17:00:00","lat":26,"long":80,"fee_type":"Free","session_id":"a7671ccd-f063-46f6-8c82-a03cc9f3a662","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":602085,"name":"Chandan Hospital Limited","address":"Faizabad Road Near Vijayant Khand Gomti Nagar","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"LUCKNOW URBAN","pincode":226010,"from":"10:00:00","to":"16:00:00","lat":26,"long":81,"fee_type":"Paid","session_id":"0e06ea19-296c-4991-af5c-62beffe5e8db","date":"02-12-2021","available_capacity":200,"available_capacity_dose1":0,"available_capacity_dose2":200,"fee":"1145","allow_all_age":true,"min_age_limit":18,"vaccine":"SPUTNIK V","slots":[{"time":"10:00AM-11:00AM","seats":50},{"time":"11:00AM-12:00PM","seats":50},{"time":"12:00PM-01:00PM","seats":50},{"time":"01:00PM-04:00PM","seats":50}]},{"center_id":601754,"name":"Atharv Hospital","address":"Dubagga Road Opp- Dubagga Power House Dubagga","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"LUCKNOW URBAN","pincode":226003,"from":"09:00:00","to":"18:00:00","lat":26,"long":80,"fee_type":"Paid","session_id":"8b04738d-ccf5-42b8-9901-3b2e2521a315","date":"02-12-2021","available_capacity":100,"available_capacity_dose1":50,"available_capacity_dose2":50,"fee":"780","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":25},{"time":"11:00AM-01:00PM","seats":25},{"time":"01:00PM-03:00PM","seats":25},{"time":"03:00PM-06:00PM","seats":25}]},{"center_id":889383,"name":"Bakshi Ka Talab Mobile Team-2","address":"Bakshi Ka Talab Lucknow Uttar Pradesh","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"Bakshi Ka Talab","pincode":226201,"from":"09:00:00","to":"17:00:00","lat":27,"long":80,"fee_type":"Free","session_id":"c3963975-9e50-4315-ae52-f05ef14fe4cb","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":889383,"name":"Bakshi Ka Talab Mobile Team-2","address":"Bakshi Ka Talab Lucknow Uttar Pradesh","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"Bakshi Ka Talab","pincode":226201,"from":"09:00:00","to":"17:00:00","lat":27,"long":80,"fee_type":"Free","session_id":"5b6ad439-e384-4503-a5d3-8a2830fbe822","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":889382,"name":"Bakshi Ka Talab Mobile Team-1","address":"Bakshi Ka Talab Lucknow Uttar Pradesh","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"Bakshi Ka Talab","pincode":226201,"from":"09:00:00","to":"17:00:00","lat":27,"long":80,"fee_type":"Free","session_id":"609b43bb-e8a2-4596-b596-b70f70347a1b","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":898532,"name":"Chitwapur-Registrar Office","address":"Kaiserbagh Behind C.M.O. Office","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"Bakshi Ka Talab","pincode":226018,"from":"09:00:00","to":"17:00:00","lat":26,"long":80,"fee_type":"Free","session_id":"861b7e5d-9583-427d-ab3c-16c25fecf1f3","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":889382,"name":"Bakshi Ka Talab Mobile Team-1","address":"Bakshi Ka Talab Lucknow Uttar Pradesh","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"Bakshi Ka Talab","pincode":226201,"from":"09:00:00","to":"17:00:00","lat":27,"long":80,"fee_type":"Free","session_id":"01c22c8c-b2b5-4eb3-aad4-9edbcf09c936","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":889372,"name":"Silver Jubliee Mobile Team","address":"Jagat Narayan Road Lucknow Uttar Pradesh","state_name":"Uttar Pradesh","district_name":"Lucknow","block_name":"LUCKNOW URBAN","pincode":226003,"from":"09:00:00","to":"17:00:00","lat":26,"long":80,"fee_type":"Free","session_id":"e9216d02-a14c-418d-a020-fbecd20e933d","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":760731,"name":"Workplace Imiliya mrj CVC","address":"Imiliya mrj","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Maharajganj","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"5be9159a-902a-40e3-98b9-d497184ab0f3","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":842930,"name":"Mrj.P.S. Rampur Bujurg ","address":"Primary school Rampur Bujurg maharajganj","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"d64f728a-545c-4345-aae9-25610e00b1b9","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":762251,"name":"MITHAURA MOHNAPUR","address":"MOHNAPUR","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Mithaura","pincode":273207,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"5da10845-a2d2-4525-83b2-028be2d6cb7d","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":863184,"name":"MRj.PAKADI KHURD ","address":"Pakadi khurd maharajganj","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"24d9f3d5-893d-4b13-8109-2f7825bf9593","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":945193,"name":"Shishgarh-Ahirauli-Chautarwa","address":"ratanpur","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273164,"from":"09:00:00","to":"18:00:00","lat":27,"long":82,"fee_type":"Free","session_id":"217cd567-447e-468c-b609-c02589cf13f5","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":945193,"name":"Shishgarh-Ahirauli-Chautarwa","address":"ratanpur","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273164,"from":"09:00:00","to":"18:00:00","lat":27,"long":82,"fee_type":"Free","session_id":"67b7a16d-5dda-4c31-906d-f65fec869295","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":917538,"name":"Mrj.Amrutiya ","address":"Amrutiya kewtahiya ","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"10550a61-dc4e-4615-8982-5b00b82ac2fd","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":815350,"name":"PIPRA MAUNI","address":"PHARENDA","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Pharenda","pincode":273155,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"188cd65c-898c-4cc4-bb3f-f3a6f8ca2dce","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":917538,"name":"Mrj.Amrutiya ","address":"Amrutiya kewtahiya ","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"8d95db15-3b1e-4b02-8dcd-da7ac72d5909","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":931990,"name":"PARSA BENI","address":"PHARENDA","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Pharenda","pincode":273155,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"489fa699-269e-4abc-92e8-74049dc52427","date":"02-12-2021","available_capacity":1,"available_capacity_dose1":0,"available_capacity_dose2":1,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":1}]},{"center_id":855696,"name":"MRJ P.S. SISWANIYA","address":"Primary school Siswaniya","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"94ccd2dd-59f1-4312-97ba-3c80ba68e403","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":796049,"name":"PURENDERPUR SUBCENTER DHANI","address":"KUVADARI NAUSAGAR","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Dhani","pincode":273161,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"b92bc662-2b7a-44ab-b529-38d30614c3e7","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":863184,"name":"MRj.PAKADI KHURD ","address":"Pakadi khurd maharajganj","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"728c80f3-9a45-46af-8af3-c12a16fac031","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":780615,"name":" P.BHAWAN KARMAHA","address":"PANCHAYAT BHAWAN KARMAHA","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Maharajganj","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"ba5d2a54-424f-45d7-8187-cd5795674889","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":945176,"name":"Godahwa-Argha-Jehari-Sekhuani","address":"ratanpru","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273164,"from":"09:00:00","to":"18:00:00","lat":27,"long":82,"fee_type":"Free","session_id":"d1d0ff57-6e1c-4d09-b2ec-eaca0d5dfdce","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":844932,"name":"Lax Dasrathpur","address":"Laxmipur Dasrathpur","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Lakshmipur","pincode":273162,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"87f8c8f2-47a2-4953-9551-bef0479bc24b","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":846517,"name":"Lax Ramnager","address":"Laxmipur  Ramnager","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Lakshmipur","pincode":273162,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"a4031cab-987d-41b7-b631-48a4a77d9ed5","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":855696,"name":"MRJ P.S. SISWANIYA","address":"Primary school Siswaniya","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"5a3a22c0-14f0-4641-871d-a1c0e421192b","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":815350,"name":"PIPRA MAUNI","address":"PHARENDA","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Pharenda","pincode":273155,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"80758391-2737-4156-b8ba-8f8e02e9dd36","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":945176,"name":"Godahwa-Argha-Jehari-Sekhuani","address":"ratanpru","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273164,"from":"09:00:00","to":"18:00:00","lat":27,"long":82,"fee_type":"Free","session_id":"1bce1065-7a77-4ea2-a3b5-741b6f9b7d48","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":950866,"name":"MRJ.NETA KHASH","address":"PRATHMIK VIDYALAYANETA KHASH","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273151,"from":"09:00:00","to":"17:00:00","lat":27,"long":88,"fee_type":"Free","session_id":"09944580-7772-46c2-b94f-56b279815062","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":842930,"name":"Mrj.P.S. Rampur Bujurg ","address":"Primary school Rampur Bujurg maharajganj","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nautanwa","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"72af2f02-0f97-4aae-a6bb-2660ad405cc1","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":931987,"name":"SEMRAHNI","address":"PHARENDA","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Pharenda","pincode":273155,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"caa3a64f-2df5-4cd3-840d-5e2fd9230d3d","date":"02-12-2021","available_capacity":1,"available_capacity_dose1":0,"available_capacity_dose2":1,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":1}]},{"center_id":780615,"name":" P.BHAWAN KARMAHA","address":"PANCHAYAT BHAWAN KARMAHA","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Maharajganj","pincode":273303,"from":"09:00:00","to":"17:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"a9239649-e155-4a24-8437-5ee2eea07cce","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-05:00PM","seats":0}]},{"center_id":842409,"name":"NIC PS BANDI VISHUNPURA-1","address":"BANDI VISHUNPURA-1","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Nichlaul","pincode":273304,"from":"09:00:00","to":"18:00:00","lat":64,"long":24,"fee_type":"Free","session_id":"e121a6cc-a678-4054-86cd-568bd8a22f61","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]},{"center_id":931987,"name":"SEMRAHNI","address":"PHARENDA","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Pharenda","pincode":273155,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"385db84b-39f3-4d43-bb18-2b162f8408ea","date":"02-12-2021","available_capacity":1,"available_capacity_dose1":0,"available_capacity_dose2":1,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVAXIN","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":1}]},{"center_id":762251,"name":"MITHAURA MOHNAPUR","address":"MOHNAPUR","state_name":"Uttar Pradesh","district_name":"Maharajganj","block_name":"Mithaura","pincode":273207,"from":"09:00:00","to":"18:00:00","lat":27,"long":83,"fee_type":"Free","session_id":"4edadd50-a027-46b1-976a-e2fa152ea762","date":"02-12-2021","available_capacity":0,"available_capacity_dose1":0,"available_capacity_dose2":0,"fee":"0","allow_all_age":true,"min_age_limit":18,"vaccine":"COVISHIELD","slots":[{"time":"09:00AM-11:00AM","seats":0},{"time":"11:00AM-01:00PM","seats":0},{"time":"01:00PM-03:00PM","seats":0},{"time":"03:00PM-06:00PM","seats":0}]}]}'
const arrStates=JSON.parse(states)
const arrDistrictsUP=JSON.parse(districtsUP)
const arrSessions=JSON.parse(sessions)
console.log(arrStates)
console.log(arrSessions)
console.log(arrStates.states[0])
$populateStates();
function $populateStates(){
  for(i=0;i<arrStates.states.length;i++){
     $("#selStates").append("<option>"+arrStates.states[i].state_name+"</option>")    
   }
}

function $populateDistricts(){
    console.log(arrDistrictsUP)
    for(i=0;i<arrDistrictsUP.districts.length;i++){
        $("#selDistrictsUP").append("<option>"+arrDistrictsUP.districts[i].district_name+"</option>")    
       }
    }

$("#selStates").change(function(){
   if($("#selStates :selected").text()=="Uttar Pradesh"){
    $populateDistricts();
    }
})

$("#selDistrictsUP").change(function(){
    $("#tabSessions").html("");
    $("#tabSessions").append("<tr><th>Name</th><th>Fee Type</th><th>Fee</th><th>Date</th><th>Capacity</th><th>Min Age</th><th>Vaccine</th></tr>")
     for(i=0;i<arrSessions.sessions.length;i++){
         let $district=$("#selDistrictsUP :selected").text()
         console.log($district)
         if(arrSessions.sessions[i].district_name==$district){
         $("#tabSessions").append("<tr><td>"+arrSessions.sessions[i].name+"</td><td>"+arrSessions.sessions[i].fee_type+"</td><td>"+arrSessions.sessions[i].fee+"</td><td>"+arrSessions.sessions[i].date+"</td><td>"+arrSessions.sessions[i].available_capacity+"</td><td>"+arrSessions.sessions[i].min_age_limit+"</td><td>"+arrSessions.sessions[i].vaccine+"</td></tr>")
         }
     }     
})

})