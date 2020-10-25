import React from "react";

const Modal = (props) => {
	return (
		<div>
			<div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div className="fixed inset-0 transition-opacity">
						<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

					<div
						className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
					>
						<div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 items-center text-center justify-center mx-auto">
							<div className="text-white text-lg border-b border-white">
								Make an ad
							</div>
							<div className="mt-5">
								<form className="w-full justify-center">
									<div className="md:flex md:items-center mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4"
												for="inline-full-name"
											>
												Product Name
											</label>
										</div>
										<div className="md:w-2/3">
											<input
												className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
												id="inline-full-name"
												type="text"
											/>
										</div>
									</div>
									<div className="md:flex md:items-center mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-500 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4"
												for="inline-full-name"
											>
												Description
											</label>
										</div>
										<div className="md:w-2/3">
											<textarea
												id="about"
												rows="3"
												className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-gray-600"
												placeholder="A small description about the product"
											></textarea>
										</div>
									</div>
									<div className="md:flex md:items-center mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
												for="inline-password"
											>
												Category
											</label>
										</div>
										<div className="md:w-2/3">
											<select className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												<option>Recyclable</option>
												<option>Reusable</option>
											</select>
										</div>
									</div>
									<div className="md:flex md:items-center mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
												for="inline-password"
											>
												Type
											</label>
										</div>
										<div className="md:w-2/3">
											<select className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												<option>Plastic</option>
												<option>Glass</option>
											</select>
										</div>
									</div>
									<div className="md:flex md:items-center mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
												for="inline-full-name"
											>
												Price
											</label>
										</div>
										<div className="md:w-2/3">
											<input
												className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
												id="inline-full-name"
												type="text"
												placeholder="Rs. xxxxx"
											/>
										</div>
									</div>
									<div className="md:flex md:items-center mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
												for="inline-full-name"
											>
												Phone Number
											</label>
										</div>
										<div className="md:w-2/3">
											<input
												className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
												id="inline-full-name"
												type="text"
											/>
										</div>
									</div>
									<div className="md:flex md:items-center mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
												for="inline-full-name"
											>
												Location
											</label>
										</div>
										<div className="md:w-2/3">
											<input
												className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
												id="inline-full-name"
												type="text"
											/>
										</div>
									</div>
									<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
										<span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
											<button
												type="button"
												onClick={() => {
													props.deactivate(false);
												}}
												className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
											>
												Cancel
											</button>
										</span>
										<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
											<button
												type="button"
												onClick={() => {
													props.deactivate(false);
												}}
												type="submit"
												className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5"
											>
												Post
											</button>
										</span>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;