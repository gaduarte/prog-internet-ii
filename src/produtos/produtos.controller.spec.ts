import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

describe('ProdutosController', () => {
  let controller: ProdutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosController],
      providers: [ProdutosService],
    }).compile();

    controller = module.get<ProdutosController>(ProdutosController);
  });

<<<<<<< HEAD
  
=======
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
>>>>>>> 1941279253b4e94b4ac9af1993b6d98993f13269
});
